import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from 'Assets/logo.svg';
import Btn from 'Components/Buttons/Btn';
// import useAuth from 'Hooks/UseAuth';
import { LocalStorage } from "Utils/LocalStorage";
import InputController from 'Components/FormControls/Controllers/InputController';
// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { http } from 'Utils/Http/Http';
import { setProgress } from 'Utils/ProgressUtils/ProgressSvc';
import yup from 'Utils/Yup';
import { toast } from 'react-toastify';
const storage = new LocalStorage();

const SIGN_IN_BTN = 'SIGN_IN_BTN';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export default function SignInPage() {
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const history = useHistory();
    // const auth = useAuth();

    const { t } = useTranslation();

    // const { executeRecaptcha } = useGoogleReCaptcha();

    const handleLogin = async (values) => {
        setProgress(SIGN_IN_BTN, true);

        try {
            // if (process.env.NODE_ENV === 'production') {
            //     // const token = await executeRecaptcha();
            //     const {
            //         data: { score },
            //     } = await http.get('/recaptcha/validate', {
            //         params: { token },
            //         baseURL: process.env.REACT_APP_BASE_URL,
            //     });

            //     if (score < 0.5) {
            //         return;
            //     }
            // }
            await http.post(
                '/auth/login',
                { ...values },
                {
                    baseURL: process.env.REACT_APP_BASE_URL,
                },
            ).then(async (res) => {
                storage.set("user", res?.data?.data);
                storage.set("userToken", res?.data?.data?.token);
                setProgress(SIGN_IN_BTN, false);
                history.push('/admin/video')
            }).catch((res) => {
                toast.error(res?.response?.data?.message)
                setProgress(SIGN_IN_BTN, false);
            })

            setProgress(SIGN_IN_BTN, false);
        } catch (error) {
            // handle errors
            setProgress(SIGN_IN_BTN, false);
        }
    };

    return (
        <div className="flex min-h-screen bg-white py-12 justify-center items-center">
            <div style={{ padding: '25px 20px', borderRadius: '20px', boxShadow: '1px 1px 10px 1px rgba(21,124,15,0.4)' }}>
                <div className="w-full max-w-sm mx-auto lg:w-96">
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-auto h-20" src={logo} alt="logo" />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        {t('signIn.signInToYourAccount')}
                    </h2>
                    <div className="mt-8">
                        <div className="mt-6">
                            <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
                                <InputController control={control} name="email" label={t('formLabels.email')} />
                                <InputController
                                    type="password"
                                    control={control}
                                    name="password"
                                    label={t('formLabels.password')}
                                />
                                <div className="flex items-center justify-between">
                                    <Link component={RouterLink} to="/forgot-password">{t('signIn.forgotYourPassword')}</Link>
                                </div>
                                <Btn type="submit" name={SIGN_IN_BTN}>
                                    {t('signIn.signIn')}
                                </Btn>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { create } from 'react-modal-promise';
import Dialog from '@mui/material/Dialog';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BtnBase from 'Components/Buttons/BtnBase';

function ConfirmationDialog({ isOpen, title, text, onReject, onResolve }) {
    const { t } = useTranslation();

    return (
        <Dialog open={isOpen} onClose={onReject}>
            <div className="space-y-10">
                <div className="w-60 pt-5 pl-5 mr-10">
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="body2">{text}</Typography>
                </div>

                <div className="flex justify-end pb-1.5 pr-1">
                    <BtnBase variant="text" onClick={onReject} fullWidth={false}>
                        {t('common.cancel')}
                    </BtnBase>
                    <BtnBase variant="text" onClick={onResolve} fullWidth={false}>
                        {t('common.continue')}
                    </BtnBase>
                </div>
            </div>
        </Dialog>
    );
}

export default create(ConfirmationDialog);

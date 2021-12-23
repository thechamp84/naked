import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BtnBase from '../Buttons/BtnBase';

function ConfirmationDialog({ isOpen, title, text, onReject, onResolve }) {
    const { t } = useTranslation();

    return (
        <Dialog open={isOpen} onClose={onReject} fullWidth maxWidth="sm">
            <DialogContent>
                <div className="space-y-10">
                    <div className="pt-3">
                        <Typography variant="h6">{title}</Typography>
                        <Typography variant="body1" className="mt-1">{text}</Typography>
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
            </DialogContent>
        </Dialog>
    );
}

export default ConfirmationDialog;

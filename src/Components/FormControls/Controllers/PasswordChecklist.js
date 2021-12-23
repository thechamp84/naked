import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const isConditionSatisfied = (currentValue) => currentValue.state;

export default function PasswordChecklist({ password }) {
    const { t } = useTranslation();
    const [passwordLength, setPasswordLength] = useState(false);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isLowerCase, setIsLowerCase] = useState(false);
    const [containsSymbols, setContainsSymbols] = useState(false);
    const [containsNumbers, setContainsNumbers] = useState(false);

    const symbols = new RegExp(/[!@#\$%\^&\*]/);

    const checkListItems = [
        {
            title: t('validation.containAtLeast8Characters'),
            state: passwordLength,
        },
        {
            title: t('validation.containsAtLeastOneCapital'),
            state: isUpperCase,
        },
        {
            title: t('validation.containsAtLeastOneSmall'),
            state: isLowerCase,
        },
        {
            title: t('validation.containsNumbers'),
            state: containsNumbers,
        },
        {
            title: t('validation.containsSymbols'),
            state: containsSymbols,
        },
    ];

    useEffect(() => {
        setPasswordLength(password.length > 7 ? true : false);
        setIsUpperCase(password.match(/[A-Z]/) != null ? true : false);
        setIsLowerCase(password.match(/[a-z]/) != null ? true : false);
        setContainsSymbols(symbols.test(password) ? true : false);
        setContainsNumbers(password.match(/\d+/g) != null ? true : false);
    }, [password]);

    const isChecklistHidden = checkListItems.every(isConditionSatisfied);
    
    return checkListItems.map((item) =>
        isChecklistHidden ? null : (
            <div className="flex items-center">
                <div className="me-1.5">
                    {item.state ? (
                        <CheckRoundedIcon className="text-green-500" fontSize="small" />
                    ) : (
                        <ClearRoundedIcon className="text-red-500" fontSize="small" />
                    )}
                </div>
                <Typography className="text-xs mt-1" color="textSecondary">
                    {item.title}
                </Typography>
            </div>
        ),
    );
}

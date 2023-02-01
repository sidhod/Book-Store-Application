import * as React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function SortMenus() {
    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-haspopup="true"
                variant="outlined"
                outlineColor="black !important"
                disableElevation
                endIcon={<KeyboardArrowDownIcon />}
                style={{ color: 'black', background: 'white', textTransform: 'none', borderColor: 'grey' }}
            >
                Sort by relevence
            </Button>
        </div>
    );
}
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const DropdownMenu = ({ menuTitle, menuItens }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (url) => {
        setAnchorEl(null);
        url && (window.location.href = url)
    };

    return (
        <>
            <Button
                style={{ backgroundColor: 'transparent', color: 'white', padding: '0 10px' }}
                aria-expanded={open ? 'true' : undefined}
                aria-controls="basic-menu"
                onClick={handleClick}
                aria-haspopup="true"
                id="basic-button"
                disableElevation
                size="small">
                {menuTitle}
            </Button>
            <Menu
                MenuListProps={{ 'aria-labelledby': 'basic-button', }}
                onClose={() => handleClose()}
                anchorEl={anchorEl}
                id="basic-menu"
                open={open}>
                    {
                        menuItens && menuItens.length > 0 ? (
                            menuItens.map((e, i) => {
                                return <MenuItem onClick={() => { e.onClick && e.onClick(); handleClose(e.url) }} key={i}>
                                                {e.title}
                                        </MenuItem>
                            })
                        ) : undefined
                    }
            </Menu>
        </>
    )
}

export default DropdownMenu
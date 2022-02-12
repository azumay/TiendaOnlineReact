import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Llista from '../Llista/Llista';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { DrawerHeader, Drawer } from './MenuEstils';

export default function Menu(props) {
    const { setOpen, open, elementsMenu } = props;

    const theme = useTheme();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <Llista elements={elementsMenu} />
        </Drawer>
    );
}
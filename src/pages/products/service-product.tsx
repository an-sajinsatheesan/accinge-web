import Image from 'next/image';
import React, { useState } from 'react';
import Industries from '../home/landing-industries/industries';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



const ProductsServices: React.FC = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    return (
        <>

            <div className="px-4 max-w-6xl mx-auto">

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                                <Tab label="Government" value="1" />
                                <Tab label="Banking" value="2" />
                                <Tab label="Construction" value="3" />
                                <Tab label="Retail" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"> <Industries isShowHeading={false} /></TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                        <TabPanel value="4">Item Four</TabPanel>
                    </TabContext>
                </Box>

            </div>

        </>

    );
};

export default ProductsServices;
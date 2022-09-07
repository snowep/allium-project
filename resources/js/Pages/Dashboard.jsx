import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import Box from "@mui/material/Box";
import Navigation from "@/Layouts/Navigation";
import Toolbar from "@mui/material/Toolbar";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        // <Authenticated
        //     auth={props.auth}
        //     errors={props.errors}
        //     header="Dashboard"
        // >

        // <div className="py-12">
        //     <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //         <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //             <div className="p-6 bg-white border-b border-gray-200">
        //                 You're logged in!
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </Authenticated>

        <Navigation auth={props.auth}>
            <Head title="Dashboard" />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                You're logged in!
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Navigation>
    );
}

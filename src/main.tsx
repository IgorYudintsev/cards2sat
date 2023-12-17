import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import {RouterProvider} from 'react-router-dom'
import {router} from "@/routes/router.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

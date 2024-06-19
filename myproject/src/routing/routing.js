import { createBrowserRouter } from "react-router-dom"
import MySliderComp from "../components/MySliderComp"
import MyImagesComp from "../components/MyImages";
import ParentComp from "../components/ParentComp";
import PageNotFound from "../components/PageNotFound";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHookComp from "../Hooks/UseStateHookComp";
import UseEffectHookComp from "../Hooks/UseEffectHookComp";
import MaindashboardComp from "../Layout/MaindashboardComp";
import NavComp from "../Layout/NavComp";


const router = createBrowserRouter([
    {path:"Maindashboard",element:<MaindashboardComp/>,children:[
        {path:"nav",element:<NavComp/>},
        {path:"",element:<MySliderComp/>},
        {path:"myslider",element:<MySliderComp/>},
        {path:"myimages",element:<MyImagesComp/>},
        {path:"parent/:id",element:<ParentComp/>},
        {path:"parent",element:<ParentComp/>},
        {path:"UseState",element:<UseStateHookComp/>},
        {path:"ReactHooks",element:<ReactHooksComp />,children:[
            {path:"UseState",element:<UseStateHookComp/>},
            {path:"UseEffect",element:<UseEffectHookComp/>},
        ]},
    ]},
    
 
    {path:"*",element:<PageNotFound/>},

])


export default router;


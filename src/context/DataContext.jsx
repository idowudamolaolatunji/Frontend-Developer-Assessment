import { createContext, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import axios from "axios";


//////////////////////////////////////////////
//// CREATING CONTEXT ////
//////////////////////////////////////////////
const DataContext = createContext();
export default DataContext;


//////////////////////////////////////////////
//// CREATING PROVIDER ////
//////////////////////////////////////////////
export const DataProvider = ({ children }) => {

    // DELETE REQUEST
    async function deleteRequest(id) {
        const url = `${import.meta.env.VITE_SERVER_URL}/${id}`;
        try {
            

            import.meta.env.VITE_WORK_ENV === 'development' && console.log(res, data);
            return data;

        } catch (err) {
            return null
        }
    };

    // PATCH REQUEST
    async function patchRequest(id, body) {
        const url = `${import.meta.env.VITE_SERVER_URL}/${id}`;
        try {
            const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}`, body);

            // if(!res.data) throw new Error(res.)

            import.meta.env.VITE_WORK_ENV === 'development' && console.log(res, data);
            return data;

        } catch (err) {
            return err
        }
    };

    // GET REQUEST
    async function getRequest(id=null) {
        const url = `${import.meta.env.VITE_SERVER_URL}${id ? `/${id}` : ''}`;
        try {
            
            const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}`);


            import.meta.env.VITE_WORK_ENV === 'development' && console.log(res, data);
            return data;
        } catch (err) {
            return err
        }
    };


    // POST REQUEST
    async function postRequest(body) {
        const url = import.meta.env.VITE_SERVER_URL;
        try {
            

            import.meta.env.VITE_WORK_ENV === 'development' && console.log(res, data);
            return data;

        } catch (err) {
            return err
        }
    };

    // CREATE CONTEXT DATA
    let contextData = {
        deleteRequest,
        patchRequest,
        getRequest,
        postRequest,
    };


    return (
        <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
    );
};


//////////////////////////////////////////////
//// CREATING HOOK AND EXPORTING ////
//////////////////////////////////////////////
export const useDataContext = () => useContext(DataContext);
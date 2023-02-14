import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import qualitiesService from "../services/qualities.service";

const QualitiesContext = React.createContext();
export const useQualities = () => {
    return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
    const [isLoading, setloading] = useState(true);
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        getQualitiesList();
    }, []);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    async function getQualitiesList() {
        try {
            const { content } = await qualitiesService.get();
            setQualities(content);
            setloading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }
    function getQuality(id) {
        return qualities.find((qual) => qual._id === id);
    }
    return (
        <QualitiesContext.Provider value={{ isLoading, qualities, getQuality }}>
            {children}
        </QualitiesContext.Provider>
    );
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

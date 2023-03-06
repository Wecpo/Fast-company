import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import qualityService from "../services/quality.service";

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
        getQualities();
    }, []);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    async function getQualities() {
        try {
            const { content } = await qualityService.fetchAll();
            setQualities(content);
        } catch (error) {
            errorCatcher(error);
        } finally {
            setloading(false);
        }
    }
    function getQuality(id) {
        return qualities.find((qual) => qual._id === id);
    }
    if (!isLoading) {
        return (
            <QualitiesContext.Provider
                value={{ isLoading, qualities, getQuality }}
            >
                {children}
            </QualitiesContext.Provider>
        );
    } else return <p>loading...</p>;
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

import { useQualities } from "../../hooks/useQualities";
import React from "react";
import PropTypes from "prop-types";

const QualityFromDatabase = ({ id }) => {
    const { isLoading, getQuality, qualities } = useQualities();
    const qual = getQuality(id);
    console.log(qual, qualities);
    if (!isLoading) {
        return <p>{qualities[0].name}</p>;
    } else {
        return "loading";
    }
};

QualityFromDatabase.propTypes = {
    id: PropTypes.array
};

export default QualityFromDatabase;

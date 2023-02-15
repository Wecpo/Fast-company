import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";

const Quality = ({ id }) => {
    const { getQuality, isLoading } = useQualities();
    const qual = id.map((id) => {
        return getQuality(id);
    });

    if (!isLoading) {
        return qual.map((q) => (
            <span key={q._id} className={"badge m-1 bg-" + q.color}>
                {q.name}
            </span>
        ));
    } else {
        return "loading";
    }
};

Quality.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.array
};

export default Quality;

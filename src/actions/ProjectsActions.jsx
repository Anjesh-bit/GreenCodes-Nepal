
import React from "react";
import { PROJECT_DATA_FAIL } from "../constants/projectsConstants";
import { PROJECT_DATA_SUCCESS } from "../constants/projectsConstants";

const ProjectsActions = (data) => (dispatch) => {
    try {
        dispatch({ type: PROJECT_DATA_SUCCESS, payload: data })
    }
    catch (e) {
        dispatch({ type: PROJECT_DATA_FAIL, payload: e.response.data.message ? e.response.data.message : e.message })
    }
}

export default ProjectsActions;
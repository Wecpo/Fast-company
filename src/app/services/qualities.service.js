import httpService from "./http.service";

const qualitiesEndpoint = "quality/";

const qualitiesService = {
    get: async () => {
        const req = await httpService.get(qualitiesEndpoint);
        return req.data;
    }
};

export default qualitiesService;

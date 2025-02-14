import Api from "./Api"

const api = Api()

export default {
    index() {
        return api.get('/plants')
    },
    insert(plant) {
        return api.post('/plants', plant)
    },
    update(plant) {
        return api.put(`/plants/${plant.id}`, plant)
    },
    delete(id) {
        return api.delete(`/plants/${id}`)
    }
}

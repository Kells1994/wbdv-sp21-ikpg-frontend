/*const WIDGETS_URL = "http://localhost:8080/api/widgets";
const TOPICS_URL = "http://localhost:8080/api/topics";*/
const WIDGETS_URL = process.env.REACT_APP_WIDGET_URL

export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${WIDGETS_URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${WIDGETS_URL}/topics/${topicId}/widgets`)
        .then(response => response.json())

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_URL}/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/widgets/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(`${WIDGETS_URL}/widgets`)
        .then(response => response.json())

export const findWidgetById = (wid) =>
    fetch(`${WIDGETS_URL}/widgets/${wid}`)
        .then(response => response.json())

const api = {
    createWidgetForTopic,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget
};

export default api;
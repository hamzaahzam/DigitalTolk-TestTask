export default function () {
    return {
        tabs: [
            { icon: "fa-clipboard-list", name: "task" },
            { icon: "fa-location-dot", name: "location" },
        ],
        acess_token: null,
        selectedtab: "task",
        tasks: [],
        checke_ins: []
    };
}
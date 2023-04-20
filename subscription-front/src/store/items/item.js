export const item = {
    namespaced: true,

    state: () => ({
        items: [
            {numberCard: 14, name: "Koda", count: 299, date: 14, color: "#AD00FF"},
            {numberCard: 12, name: "Netflix", count: 499, date: 13, color: "#FF0000"},
            {numberCard: 3, name: "YouTube premium", count: 300, date: 23, color: "#FF6500"}]
    }),


    getters: {
        totalCount: (state) => {
            return state.items.reduce((total, item) => {
                return total + parseInt(item.count);
            }, 0);
        }
    },

    mutations: {
        setName(state, {name, numberCard}) {
            state.items.find(x => x.numberCard === numberCard).name = name
        },

        setPrice(state, {count, numberCard}) {
            state.items.find(x => x.numberCard === numberCard).count = count
        },

        setDate(state, {date, numberCard}) {
            state.items.find(x => x.numberCard === numberCard).date = date
        },

        setColor(state, {color, numberCard}) {
            state.items.find(x => x.numberCard === numberCard).color = color
        },

        deleteItem(state, numberCard) {
            const index = state.items.findIndex(x => x.numberCard === numberCard)
            state.items.splice(index, 1)
            // state.items = state.items.filter((item) => item.numberCard !== numberCard)
        },

        addItem(state, newItem) {
            const lastItem = state.items[state.items.length - 1];
            const newNumberCard = lastItem ? lastItem.numberCard + 1 : 1;
            state.items.push({
                numberCard: newNumberCard,
                color: newItem.color,
                count: newItem.count,
                date: newItem.date,
                name: newItem.name
            });
        }
    },

    actions: {},
};
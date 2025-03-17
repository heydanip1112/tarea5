export const createNotificationSlice = (set) => ({
    notifications: [],

    addNotification: (message, type = "info") => {
        set((state) => ({
            notifications: [...state.notifications, { message, type, id: Date.now() }]
        }));

        setTimeout(() => {
            set((state) => ({
                notifications: state.notifications.slice(1)
            }));
        }, 4000);
    }
});
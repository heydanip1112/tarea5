import { useAppStore } from "../store/useAppStore";

export function Notification() {
    const notifications = useAppStore((state) => state.notifications);

    return (
        <div className="fixed top-5 right-5 space-y-3 z-50">
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className={`px-4 py-2 rounded shadow-md text-white ${
                        notification.type === "error" ? "bg-red-600" : "bg-green-600"
                    }`}
                >
                    {notification.message}
                </div>
            ))}
        </div>
    );
}
export const createFavoritesSlice = (set, get) => ({
    // Estado inicial: una lista vacía de favoritos
    favorites: [],

    // Función para verificar si una receta ya está en favoritos
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink == id);
    },

    // Maneja el clic en el botón de favorito (agregar o eliminar)
    handleClickFavorite: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            // Si la receta ya está en favoritos, la eliminamos de la lista
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink != recipe.idDrink)
            }));
            get().addNotification(`${recipe.strDrink} eliminado de favoritos`, "error");
        } else {
            // Si no está en favoritos, la agregamos
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }));
            get().addNotification(`${recipe.strDrink} agregado a favoritos`, "success");
        }

        // Guardamos la lista actualizada de favoritos en localStorage
        localStorage.setItem('favorites', JSON.stringify(get().favorites));
    },

    // Carga la lista de favoritos desde localStorage al iniciar la aplicación
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            });
        }
    }
});

const mapAnnounces = (response: any, navigate: any) => {
  return response.map((item: any) => ({
    id: item.id,
    photoes: item.pictures,
    brand: item.brand.nom,
    model: item.modele.nom,
    year: item.year,
    category: item.year,
    user: {
      id: item.vendeur.idvendeur,
      photo: item.vendeur.profile,
      name: item.vendeur.nom,
      onClick: () => {},
    },
    price: item.prix,
    note: item.etat,
    onFavorite: () => {},
    onClick: () => {
      navigate(`/announce/${item.id}`);
    },
    description: item.description,
    favoris: item.favoris,
  }));
};

export default mapAnnounces;

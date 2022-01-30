const resolvers = {
  Query: {
    albumListForHome: async (_, __, { Album }) => {
      const albumList = await Album.find({}).sort({ title: -1 });
      return albumList;
    },
    albumForPage: async (_, args, { Album }) => {
      const album = await Album.findById(args.id);
      return album;
    },
  },

  Mutation: {
    addToLike: async (_, { id }, { Album }) => {
      const updatedAlbum = await Album.findByIdAndUpdate(
        id,
        { $inc: { likeCount: 1 } },
        { new: true }
      );
      return updatedAlbum;
    },
    removeFromLike: async (_, { id }, { Album }) => {
      const updatedAlbum = await Album.findByIdAndUpdate(
        id,
        { $inc: { likeCount: -1 } },
        { new: true }
      );
      return updatedAlbum;
    },

    addAlbum: async (
      _,
      { input: { title, artist, type, albumArt, urls, colors, likeCount } },
      { Album }
    ) => {
      const newAlbum = {
        title: title,
        artist: {
          name: artist.name,
          photoURL: artist.photoURL,
        },
        type: type,
        albumArt: albumArt,
        urls: {
          spotify: urls.spotify,
          apple: urls.apple,
        },
        colors: colors.map((color) => color),
        likeCount: likeCount,
      };
      const albumToSave = await Album.create(newAlbum);
      return albumToSave;
    },

    deleteAlbum: async (_, { id }, { Album }) => {
      try {
        await Album.findOneAndRemove({ _id: id });
        return true;
      } catch (err) {
        return false;
      }
    },

    updateAlbum: async (
      parent,
      { id, input: { title, artist, type, albumArt, urls, colors, likeCount } },
      { Album }
    ) => {
      const updatedAlbum = await Album.findOneAndUpdate(
        { _id: id },
        {
          title: title !== undefined && title,
          artist: {
            name: artist.name !== undefined && artist.name,
            photoURL: artist.photoURL !== undefined && artist.photoURL,
          },
          type: type !== undefined && type,
          albumArt: albumArt !== undefined && albumArt,
          urls: {
            spotify: urls.spotify !== undefined && urls.spotify,
            apple: urls.apple !== undefined && urls.apple,
          },
          colors: colors !== undefined && colors.map((color) => color),
          likeCount: likeCount !== undefined && likeCount,
        },
        {
          new: true,
        }
      );
      return updatedAlbum;
    },
  },
};

export default resolvers;

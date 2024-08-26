const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });
    return { ...tree, item: latestNode };
  }
  const deleteNode = (tree, folderId) => {    
    // if (!(tree.folderId === 1)) {
    //   tree = tree.items.filter((val) => val.id == folderId);
    //   return tree;
    // }
  };
  const updateNode = (tree, folderId, item, isFolder) => {};
  return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;

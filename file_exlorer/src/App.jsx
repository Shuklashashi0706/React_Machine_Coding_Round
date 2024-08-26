import { explorer } from "./data/folderData.js";
import { useState } from "react";
import Folder from "./components/Folder.jsx";
import useTraverseTree from "./hooks/use_traverse_tree.js";
const App = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  // const handleDeleteNode = (folderId) => {
  //   console.log("caled");
    
  //   const finalTree = deleteNode(explorerData, folderId);
  //   setExplorerData(finalTree);
  // };
  return (
    <div className="app">
      <Folder  handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};

export default App;

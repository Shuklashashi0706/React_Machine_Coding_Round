import React, { useState } from "react";

const Folder = ({ explorer, handleInsertNode, handleDeleteNode }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setIsExpand(true);
    setShowInput({ ...showInput, visible: true, isFolder: isFolder });
  };
  const addNewFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      //add your logic here
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            // handleDeleteNode(explorer.id);
            setIsExpand(!isExpand);
          }}
          className="folder"
        >
          <span>📁{explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder+</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File+</button>
          </div>
        </div>
        {showInput.visible ? (
          <div className="inputContainer">
            <span>{showInput.isFolder ? "📁" : "📝"}</span>
            <input
              className="inputContainer__input "
              autoFocus
              onKeyDown={addNewFolder}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              type="text"
            />
          </div>
        ) : null}
        <div
          style={{ display: isExpand ? "block" : "none", paddingLeft: "15px" }}
        >
          {explorer.items.map((exp) => {
            return (
              <Folder
                // handleDeleteNode={handleDeleteNode}
                handleInsertNode={handleInsertNode}
                key={exp.id}
                explorer={exp}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📝{explorer.name}</span>;
  }
};

export default Folder;

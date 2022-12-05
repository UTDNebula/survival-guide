import React, {useState} from "react";
import { Editor, EditorState, RichUtils } from 'draft-js';
import "draft-js/dist/Draft.css";

export default function DraftEditor() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    )

    const editor = React.useRef(null);
    function focusEditor() {
        // @ts-ignore
        editor.current.focus();
    }

    async function buttonOnClick() {
        const contentBlocks = editorState.getCurrentContent().getBlocksAsArray()
        // TODO: Reset editorState to empty
        const contents = await Promise.all(contentBlocks.map(async (contentBlock) => {
            const response = await fetch("/api/create-content", {
                method: "POST",
                body: JSON.stringify({
                    text: contentBlock.getText(),
                    type: contentBlock.getType()
                }),
                headers: {
                    "content-Type": "application/json"
                }
            })
            const data = await response.json()
            return data.content
        }))
        console.log(contents)

        const containerResponse = await fetch("/api/create-container", {
            method: "POST",
            body: JSON.stringify({
                order: 0,
                parentContainer: null,
                childContainers: [],
                contents: contents
            }),
            headers: {
                "content-Type": "application/json"
            }
        })
        const containerData = await containerResponse.json()
        console.log(containerData.container)

        const articleResponse = await fetch("/api/create-article", {
            method: "POST",
            body: JSON.stringify({
                title: "Title", // TODO: Title
                contributors: [], // TODO: Contributors
                tags: [], // TODO: Tags
                mainContainer: containerData.container
            }),
            headers: {
                "content-Type": "application/json"
            }
        })
        const articleData = await articleResponse.json()
        console.log(articleData.article)
    }

    function handleKeyCommand(command: any, editorState: any) {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            setEditorState(newState)
            return 'handled';
        }

        return 'not-handled';
    }

    return (
        // TODO: Editor styling
        <section>
            <div
                style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
                onClick={focusEditor}
            >
                <Editor
                    ref={editor}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={setEditorState}
                    placeholder="Write something!"
                />
            </div>
            <button onClick={buttonOnClick}>Submit</button>
        </section>
    );
}
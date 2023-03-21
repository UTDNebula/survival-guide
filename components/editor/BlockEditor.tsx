import React, { memo, useEffect, useRef } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import EDITOR_TOOLS from './editor-tools';

interface BlockEditor {
  data?: OutputData;
  onChange: (val: OutputData) => void;
  holderId: string;
}

export default memo(function BlockEditor({ data, onChange, holderId }: BlockEditor) {
  const ref = useRef<EditorJS>();

  // Initialize editorjs
  useEffect(() => {
    // Initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holderId,
        tools: EDITOR_TOOLS,
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id={holderId} />;
});

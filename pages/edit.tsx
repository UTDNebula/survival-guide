import { OutputData } from '@editorjs/editorjs';
import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import { useState } from 'react';

function PaperSheet({ children }: React.PropsWithChildren) {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-4 bg-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] md:rounded-md">
      {children}
    </div>
  );
}

type ChangeMetadataFormData = {
  authorName: string;
  slug: string;
};

interface ChangeMetadataFormProps {
  initialValues: ChangeMetadataFormData;
}

function ChangeMetadataForm({ initialValues }: ChangeMetadataFormProps) {
  const formik = useFormik({
    initialValues: {
      authorName: initialValues.authorName,
      slug: initialValues.slug,
      changeDescription: '',
    },
    onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <PaperSheet>
      <section>
        <div className="space-y-4">
          <div className="text-4xl font-bold font-display">Summarize Changes</div>
        </div>
      </section>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="authorName" className="text-xl font-display">
          Slug
        </label>
        <br />
        <input
          className="my-2 p-2 w-full bg-neutral-200 focus:bg-neutral-300 rounded-md"
          id="slug"
          name="slug"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.slug}
        />
        <br />
        <label htmlFor="authorName" className="text-xl font-display">
          Name
        </label>
        <br />
        <input
          className="my-2 p-2 w-full bg-neutral-200 focus:bg-neutral-300 rounded-md"
          id="authorName"
          name="authorName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.authorName}
        />
        <br />
        <label htmlFor="changeDescription" className="text-xl font-display">
          Description of Changes
        </label>
        <br />
        <textarea
          className="my-2 p-2 w-full bg-neutral-200 focus:bg-neutral-300 rounded-md"
          id="changeDescription"
          name="changeDescription"
          placeholder="Added&hellip;"
          onChange={formik.handleChange}
          value={formik.values.changeDescription}
        />
      </form>
    </PaperSheet>
  );
}

const EditorBlock = dynamic(() => import('../components/editor'), {
  ssr: false,
});

export default function EditPage() {
  const [data, setData] = useState<OutputData>();

  const initialMetadata: ChangeMetadataFormData = {
    authorName: 'Anonymous User',
    slug: 'test',
  };

  return (
    <div className="py-4 md:px-4 lg:py-8 lg:px-16 min-h-screen space-y-4 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-x-4 bg-[#e0ecfb]">
      <div className="col-span-8 space-y-8">
        <PaperSheet>
          <section>
            <div className="space-y-4">
              <div className="text-4xl font-bold font-display">Create Article</div>
              <div className="text-xl"></div>
            </div>
          </section>
          {/* <section id="frontmatter">
            <div className="text-3xl font-medium font-display">Author Information</div>
          </section> */}
          <section id="editor">
            <EditorBlock data={data} onChange={setData} holderId="editorjs-container" />
          </section>
        </PaperSheet>
      </div>
      <div className="col-span-4 sticky top-8">
        <ChangeMetadataForm initialValues={initialMetadata} />
      </div>
    </div>
  );
}

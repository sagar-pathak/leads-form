"use client";

import React, { useState } from 'react';
import { person } from '@jsonforms/examples';
import {
    materialRenderers,
    materialCells,
} from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';

const schema = person.schema;
const uischema = person.uischema;
const initialData = person.data;

export default function Home() {
    const [data, setData] = useState(initialData);
    return (
        <div className='App'>
            <JsonForms
                schema={schema}
                uischema={uischema}
                data={data}
                renderers={materialRenderers}
                cells={materialCells}
                onChange={({ data, errors }) => setData(data)}
            />
        </div>
    );
}
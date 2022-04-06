import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <div className='mb-5 qa-part'>
                <h3>1.What is Context API?</h3>
                <p>Ans: Context API is a way for a react app to produce global variables that can be passed around.This is the alternative of prop drilling.Prop drilling is a process of sending props from grandparent to parent to child and so on.So Context APi makes it more easier.It is a kind of a feature that allows one to share state across the entire app so easily and lightly.</p>
            </div>
            <div className='qa-part'>
                <h3>2.What is Semantic Tags?</h3>
                <p>Ans: Semantic tags are more meaningful than the non-semantic tags.Semantic tags clearly describes its meaning and content to the both browser and developer.It introduces the meaning to the web page rather than just presentation.By adding semantic tags in the document one can provide additional information about that document.One can easily understands another persons code.And also it will be easy for browser to catch and read the code fast. Example of semantic elements: (form, table, article).The tags clearly defines its content.</p>
            </div>


        </div>
    );
};

export default Blogs;
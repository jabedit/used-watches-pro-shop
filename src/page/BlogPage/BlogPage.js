import React from 'react'
import { Helmet } from 'react-helmet'

function BlogPage() {
  return (
    <div>
      <Helmet>
        <title>Blog Page</title>
      </Helmet>
      <div className="bg-white py-6 sm:py-8 lg:py-12 px-5">
      <div className='my-7 p-3 shadow-md'>
                <h2  className='text-xl'>What are the different ways to manage a state in a React application?</h2>
                <p>Which state management is best in React? React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API.</p>
            </div>
            <div className='my-7 p-3 shadow-md'>
            <h2 className='text-xl'>How does prototypical inheritance work?</h2>
                <p>The most important difference between class- and prototype-based inheritance is that a class defines a type which can be instantiated at runtime, whereas a prototype is itself an object instance.</p>
            </div>
            <div className='my-7 p-3 shadow-md'>
            <h2 className='text-xl'>What is a unit test? Why should we write unit tests?</h2>
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='my-7 p-3 shadow-md'>
            <h2 className='text-xl'>React vs. Angular vs. Vue?</h2>
                <p> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components.</p>
            </div>
      </div>
    </div>
  )
}

export default BlogPage

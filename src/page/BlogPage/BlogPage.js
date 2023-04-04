import React from 'react'
import { Helmet } from 'react-helmet'

function BlogPage() {
  return (
    <div>
      <Helmet>
        <title>Blog Page</title>
      </Helmet>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Frequently asked questions
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                  Question_1: What are the different ways to manage a state in a
                  React application?
                </h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500">
                Ans_:The Four Kinds of React State to Manage___ <br />
                1. Local state. <br />
                2. Global state. <br />
                3. Server state. <br />
                4. URL state.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                  Question_2: How does prototypical inheritance work?
                </h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500">
                Ans_: The Prototypal Inheritance is a feature in javascript used
                to add methods and properties in objects. It is a method by
                which an object can inherit the properties and methods of
                another object. Traditionally, in order to get and set the
                Prototype of an object, we use Object. getPrototypeOf and
                Object.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                  Question_3: What is a unit test? Why should we write unit
                  tests?
                </h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500">
                Ans_: The main objective of unit testing is to isolate written
                code to test and determine if it works as intended. Unit testing
                is an important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                  Question_4: React vs. Angular vs. Vue?
                </h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500">
                Ans_: Vue provides higher customizability and hence is easier to
                learn than Angular or React. Further, Vue has an overlap with
                Angular and React with respect to their functionality like the
                use of components. Hence, the transition to Vue from either of
                the two is an easy option.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage

import React from 'react';



const Question = () => {
    return (
        <div>
            <div class="card text-center">
                <div class="card-header">
                    Question-1
                </div>
                <div class="card-body">
                    <h5 class="card-title">How React Works ?</h5>
                    <p class="card-text">React.js একটি library। এটি user interface তৈরিতে ব্যবহৃত হয়। React খুবই সুক্ষ্ম ও নিখুঁতভাবে কাজ করে থাকে বলে World-এ এটি বর্তমানে সবচেয়ে জনপ্রিয়। এটির সবচেয়ে ভালো দিকটি হল এটি simplicity ভাবে প্রতিক্রিয়া highlight করে। React ঝামেলাহীনভাবে interactive UI তৈরি করে। এটি encapsulated components তৈরি করতে পারে যেগুলো নিজেরাই নিজেদের state পরিচালনা করে, অতঃপর তাদের combine করে জটিল UI গঠন করে।</p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    Question-2
                </div>
                <div class="card-body">
                    <h5 class="card-title">What is the difference between props vs state ?</h5>
                    <p class="card-text">props এবং state এর মধ্যে পার্থক্য নিন্মরূপঃ-
                        Props:-
                        1.Props হলো read-only.
                        2.Props কে modify করা সম্ভব নয়।

                        state:-
                        1.State পরিবর্তনীয় synchronous ভাবে।
                        2.State কে modify করা সম্ভব .setState() দ্বারা।</p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    Question-3
                </div>
                <div class="card-body">
                    <h5 class="card-title">How useState Works ?</h5>
                    <p class="card-text">useState হল একটি Hook. এটি functional component-কে state variable-এর ভেতর রাখতে দেয়। এটি function-এ initial state pass করেন এবং এটি current state value (initial state নয়) এবং এই value update করার জন্য অন্য একটি function সহ একটি variable প্রদান করে। state update করার জন্য useState hook callback এই.setState উপাদানগুলির চেয়ে different আচরণ করে। useState array return করে। </p>
                </div>
            </div>
        </div>
    );
};

export default Question;
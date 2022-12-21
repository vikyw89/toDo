# toDo
Project for The Odin Project 2022

live preview : WIP

<section id="assignment">
  <h3><a href="#assignment" class="anchor-link">Assignment</a></h3>

  <div class="lesson-content__panel">
    <ol>
      <li>Your ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.</li>
      <li>Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a <code>title</code>, <code>description</code>, <code>dueDate</code> and <code>priority</code>.  You might also want to include <code>notes</code>  or even a <code>checklist</code>.</li>
      <li>Your todo list should have <code>projects</code> or separate lists of <code>todos</code>.  When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put.  Users should be able to create new projects and choose which project their todos go into.</li>
      <li>You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.</li>
      <li>The look of the User Interface is up to you, but it should be able to do the following:
        <ol>
          <li>view all projects</li>
          <li>view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)</li>
          <li>expand a single todo to see/edit its details</li>
          <li>delete a todo</li>
        </ol>
      </li>
      <li>For inspiration, check out the following great todo apps. (look at screenshots, watch their introduction videos etc.)
        <ol>
          <li><a href="https://en.todoist.com/" target="_blank" rel="noopener noreferrer">Todoist</a></li>
          <li><a href="https://culturedcode.com/things/" target="_blank" rel="noopener noreferrer">Things</a></li>
          <li><a href="https://www.any.do/" target="_blank" rel="noopener noreferrer">any.do</a></li>
        </ol>
      </li>
      <li>Since you are probably already using webpack, adding external libraries from npm is a cinch!  You might want to consider using the following useful library in your code:
        <ol>
          <li><a href="https://github.com/date-fns/date-fns" target="_blank" rel="noopener noreferrer">date-fns</a> gives you a bunch of handy functions for formatting and manipulating dates and times.</li>
        </ol>
      </li>
      <li>We haven’t learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their todos will disappear! You should add some persistence to this todo app using the Web Storage API.
        <ol>
          <li><code>localStorage</code> (<a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API" target="_blank" rel="noopener noreferrer">docs here</a>) allows you to save data on the user’s computer. The downside here is that the data is ONLY accessible on the computer that it was created on. Even so, it’s pretty handy! Set up a function that saves the projects (and todos) to localStorage every time a new project (or todo) is created, and another function that looks for that data in localStorage when your app is first loaded. Additionally, here are a couple of quick tips to help you not get tripped up:
            <ul>
              <li>Make sure your app doesn’t crash if the data you may want retrieve from localStorage isn’t there!</li>
              <li>localStorage uses <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON" target="_blank" rel="noopener noreferrer">JSON</a> to send and store data, and when you retrieve the data, it will also be in JSON format. You will learn more about this language in a later lesson, but it doesn’t hurt to get your feet wet now. Keep in mind you <em>cannot store functions in JSON</em>, so you’ll have to figure out how to add methods back to your object properties once you fetch them. Good luck!</li>
            </ul>
          </li>
        </ol>
      </li>
    </ol>

  </div>

</section>

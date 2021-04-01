/*
 * This piece of code handles the filtering of articles with the 3 buttons up
 * top.
 *
 * Gijs Burghoorn
 * March 31 2021
 */

var beginnerClass = 'beginner';
var advancedClass = 'advanced';

var selectedTag = 'selector-tag-selected';

var postsContainer = document.getElementById('posts-container');

var allPostsBtn = document.getElementById('all-posts-btn');
var beginnerPostsBtn = document.getElementById('beginner-posts-btn');
var advancedPostsBtn = document.getElementById('advanced-posts-btn');

var emptyPostsMsg = document.getElementById('empty-message');

/// Change the styling of the clicked element
function selectElement(elem) {
    allPostsBtn.classList.remove(selectedTag);
    beginnerPostsBtn.classList.remove(selectedTag);
    advancedPostsBtn.classList.remove(selectedTag);

    elem.classList.add(selectedTag);
}

function updateEmptyMsg() {
    var posts = postsContainer.children;
    for (var i = 0; i < posts.length; i++) {
        if (posts.item(i) === emptyPostsMsg) continue;

        if (!posts.item(i).classList.contains('hidden')) {
            emptyPostsMsg.classList.add('hidden');
            return;
        }
    }
    emptyPostsMsg.classList.remove('hidden');
}

/// Show all the article <=> Show all hidden articles
function showAll() {
    var beginnerPosts = postsContainer.getElementsByClassName(beginnerClass);
    for (var i = 0; i < beginnerPosts.length; i++) {
        beginnerPosts.item(i).classList.remove('hidden');
    }

    var advancedPosts = postsContainer.getElementsByClassName(advancedClass);
    for (var i = 0; i < advancedPosts.length; i++) {
        advancedPosts.item(i).classList.remove('hidden');
    }
}

/// Hide all beginner articles
function hideBeginner() {
    var beginnerPosts = postsContainer.getElementsByClassName(beginnerClass);
    for (var i = 0; i < beginnerPosts.length; i++) {
        beginnerPosts.item(i).classList.add('hidden');
    }
}

/// Hide all advanced articles
function hideAdvanced() {
    var advancedPosts = postsContainer.getElementsByClassName(advancedClass);
    for (var i = 0; i < advancedPosts.length; i++) {
        advancedPosts.item(i).classList.add('hidden');
    }
}

// Add all event listeners
allPostsBtn.addEventListener('click', function() {
    selectElement(this);
    showAll();
    updateEmptyMsg();
});

beginnerPostsBtn.addEventListener('click', function() {
    selectElement(this);
    showAll();
    hideAdvanced();
    updateEmptyMsg();
});

advancedPostsBtn.addEventListener('click', function() {
    selectElement(this);
    showAll();
    hideBeginner();
    updateEmptyMsg();
});

updateEmptyMsg();

function createLoginTracker({ username, password }) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === password) {
      return "Login successful";
    }

    return `Attempt ${attemptCount}: Login failed`;
  };
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
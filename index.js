function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let isLocked = false;

  return (passwordAttempt) => {
    if (isLocked) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    attemptCount++;

    if (attemptCount > 3) {
      isLocked = true;
      return "Account locked due to too many failed login attempts";
    }

    return `Attempt ${attemptCount}: Login failed`;
  };
}

module.exports = {
  createLoginTracker
};
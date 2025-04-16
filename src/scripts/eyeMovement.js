document.addEventListener("mousemove", (event) => {
  const logoContainer = document.querySelector(".logo-container");
  const flameLeft = document.querySelector(".flame-left");
  const flameRight = document.querySelector(".flame-right");

  // Get the bounding box of the logo container
  const rect = logoContainer.getBoundingClientRect();

  // Calculate the mouse position relative to the logo container
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Limit the movement to a maximum of 5 pixels for subtle movement
  const maxMovement = 3;

  // Function to calculate the movement for each eye
  function calculateEyeMovement(eyeX, eyeY) {
    const normalizedX = ((mouseX - eyeX) / rect.width) * 2;
    const normalizedY = ((mouseY - eyeY) / rect.height) * 2;

    const clampedX = Math.max(-1, Math.min(1, normalizedX));
    const clampedY = Math.max(-1, Math.min(1, normalizedY));

    const offsetX = clampedX * maxMovement;
    const offsetY = clampedY * maxMovement;

    return { offsetX, offsetY };
  }

  // Get the positions of the left and right flames
  const flameLeftRect = flameLeft.getBoundingClientRect();
  const flameRightRect = flameRight.getBoundingClientRect();

  // Calculate movement for the left eye
  const leftEyeMovement = calculateEyeMovement(
    flameLeftRect.left + flameLeftRect.width / 2 - rect.left,
    flameLeftRect.top + flameLeftRect.height / 2 - rect.top
  );

  // Calculate movement for the right eye
  const rightEyeMovement = calculateEyeMovement(
    flameRightRect.left + flameRightRect.width / 2 - rect.left,
    flameRightRect.top + flameRightRect.height / 2 - rect.top
  );

  // Apply the calculated positions to the flames
  flameLeft.style.transform = `translate(${leftEyeMovement.offsetX}px, ${leftEyeMovement.offsetY}px)`;
  flameRight.style.transform = `translate(${rightEyeMovement.offsetX}px, ${rightEyeMovement.offsetY}px)`;
});
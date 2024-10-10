let currentStep = 0
showStep(currentStep)

function showStep (step) {
  const steps = document.querySelectorAll('.step')
  const indicators = document.querySelectorAll('.nav-button')
  const car = document.getElementById('car') // Get the #car element

  // Hide all steps and deactivate all indicators
  steps.forEach((stepDiv, index) => {
    stepDiv.classList.remove('active')
  })

  // Show the active step
  steps[step].classList.add('active')

  // Update step indicators
  indicators.forEach((indicator, index) => {
    if (index === step) {
      indicator.classList.add('active')
    } else {
      indicator.classList.remove('active')
    }
  })

  // Update car image based on the step
  car.src = `assets/${step + 1}.png` // Update the car image source

  // Manage button visibility
  document.getElementById('prevBtn').style.display =
    step === 0 ? 'none' : 'inline'
  document.getElementById('nextBtn').innerHTML =
    step === steps.length - 1 ? 'Submit' : 'Next'
}

function changeStep (n) {
  const steps = document.querySelectorAll('.step')

  // Hide current step
  steps[currentStep].classList.remove('active')

  // Update step number
  currentStep += n

  // Submit form if it's the last step
  if (currentStep >= steps.length) {
    document.getElementById('quizForm').submit()
    return false
  }

  // Show new step and update indicators
  showStep(currentStep)
}

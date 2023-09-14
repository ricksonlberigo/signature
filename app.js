document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.querySelector('#signatureCanvas')
  const signaturePad = new SignaturePad(canvas)

  var clearButton = document.getElementById('clearButton')
  var saveButton = document.getElementById('saveButton')
  var savedSignature = document.getElementById('savedSignature')

  clearButton.addEventListener('click', function () {
    signaturePad.clear()
  })

  saveButton.addEventListener('click', function () {
    if (!signaturePad.isEmpty()) {
      // Salve a assinatura como imagem base64
      var signatureData = signaturePad.toDataURL()

      // Exiba a imagem da assinatura salva
      savedSignature.src = signatureData
      savedSignature.style.display = 'block'
    } else {
      alert('Por favor, assine antes de salvar.')
    }
  })
})

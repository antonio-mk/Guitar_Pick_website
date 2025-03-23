document.addEventListener("DOMContentLoaded", () => {
  const modelViewer = document.getElementById("guitarModel");
  const colorPicker = document.getElementById("colorPicker");

  // Function to update material color
  colorPicker.addEventListener("input", (event) => {
    const color = event.target.value;
    modelViewer.model?.materials.forEach((material) => {
      material.pbrMetallicRoughness.setBaseColorFactor(color);
    });
  });
});

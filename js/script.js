document.getElementById('downloadBtn').addEventListener('click', () => {
    const resumeContent = document.getElementById('resume').innerHTML;
    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumeContent).set(opt).save();
  });
  
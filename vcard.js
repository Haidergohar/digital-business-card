document.getElementById('generateVCF').addEventListener('click', generateVCF);

        function generateVCF() {
            const name = document.getElementById('name').innerHTML;
            const email = document.getElementById('email').innerHTML;
            const phone = document.getElementById('phone').innerHTML;
            const website = document.getElementById('website').innerHTML;
            const address = document.getElementById('address').innerHTML;

            const vcfData = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:${name}\r\nTEL:${phone}\r\nEMAIL:${email}\r\nURL:${website}\r\nADR:${address}\r\nEND:VCARD`;

            const blob = new Blob([vcfData], { type: 'text/vcard' });
            const url = window.URL.createObjectURL(blob);
            
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = url;
            downloadLink.style.display = 'block';

            // Trigger a click event on the download link to initiate the download
            downloadLink.click();
        }
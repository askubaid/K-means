




const runKMeans = (setIsProcessing, mainCanvasRef, image, kValue, results, setResults) => {
  setIsProcessing(true);
  
  setTimeout(() => {
    const canvas = mainCanvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      
      let data = [];
      for (let i = 0; i < pixels.length; i += 4) {
        data.push({ r: pixels[i], g: pixels[i+1], b: pixels[i+2] });
      }

      let centroids = [];
      for (let i = 0; i < kValue; i++) {
        centroids.push(data[Math.floor(Math.random() * data.length)]);
      }

      let converged = false;
      let iterations = 0;
      const MAX_ITERATIONS = 50; 
      let assignments = new Array(data.length);

      while (!converged && iterations < MAX_ITERATIONS) {
        let clusters = Array.from({ length: kValue }, () => []);
        data.forEach((pixel, pIdx) => {
          let bestK = 0, minDist = Infinity;
          centroids.forEach((c, kIdx) => {
            const dist = Math.sqrt((pixel.r-c.r)**2 + (pixel.g-c.g)**2 + (pixel.b-c.b)**2);
            if (dist < minDist) { minDist = dist; bestK = kIdx; }
          });
          assignments[pIdx] = bestK;
          clusters[bestK].push(pixel);
        });

        const newCentroids = clusters.map(c => {
          if (c.length === 0) return { r: 0, g: 0, b: 0 };
          return {
            r: Math.round(c.reduce((s, p) => s + p.r, 0) / c.length),
            g: Math.round(c.reduce((s, p) => s + p.g, 0) / c.length),
            b: Math.round(c.reduce((s, p) => s + p.b, 0) / c.length),
          };
        });

        converged = centroids.every((c, i) => 
          c.r === newCentroids[i].r && c.g === newCentroids[i].g && c.b === newCentroids[i].b
        );
        centroids = newCentroids;
        iterations++;
      }
      
      const newSegments = []; 
      const originalSegments = []; 

      for (let k = 0; k < kValue; k++) {
        const segData = new Uint8ClampedArray(pixels.length);
        const origSegData = new Uint8ClampedArray(pixels.length); 

        for (let i = 0; i < data.length; i++) {
          const pos = i * 4;
          if (assignments[i] === k) {
            segData[pos] = centroids[k].r; 
            segData[pos+1] = centroids[k].g; 
            segData[pos+2] = centroids[k].b; 
            segData[pos+3] = 255;

            origSegData[pos] = data[i].r; 
            origSegData[pos+1] = data[i].g; 
            origSegData[pos+2] = data[i].b; 
            origSegData[pos+3] = 255;
          } else {
            segData[pos+3] = 0; 
            origSegData[pos+3] = 0; 
          }
        }
        newSegments.push(new ImageData(segData, canvas.width, canvas.height));
        originalSegments.push(new ImageData(origSegData, canvas.width, canvas.height));
      }

      // CRITICAL: Update the Main Canvas Output pixels
      for (let i = 0; i < data.length; i++) {
        const k = assignments[i];
        pixels[i*4] = centroids[k].r; 
        pixels[i*4+1] = centroids[k].g; 
        pixels[i*4+2] = centroids[k].b;
        pixels[i*4+3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);

      setResults({ 
        segments: newSegments, 
        originalSegments: originalSegments, 
        colors: centroids, 
        iterations: iterations, 
        assignments: assignments
      });

      setIsProcessing(false);
    };
    img.src = image;
  }, 100);
};

export default runKMeans;

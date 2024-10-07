function generateSignatures() {
    const name = document.getElementById("nameInput").value;
    
    // Daftar ID elemen yang digunakan untuk menampilkan font
    const fontIds = [
        "DancingScript", "GreatVibes", "Pacifico", "Satisfy", "ShadowsIntoLight", 
        "KaushanScript", "AlexBrush", "Allura", "AmaticSC", "BadScript",
        "Bilbo", "Cookie", "Courgette", "MarckScript", "MrDafoe", 
        "Pangolin", "Parisienne", "PatrickHand", "Yellowtail", "Zeyada"
    ];

    // Update semua div dengan nama yang dimasukkan oleh user
    fontIds.forEach(id => {
        const signatureDiv = document.getElementById(id);
        signatureDiv.textContent = name ? name : "Signature Example";
    });
}

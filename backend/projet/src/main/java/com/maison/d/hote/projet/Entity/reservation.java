    package com.maison.d.hote.projet.Entity;
    import jakarta.persistence.*;
    import lombok.AllArgsConstructor;
    import lombok.Getter;
    import lombok.NoArgsConstructor;
    import lombok.Setter;
    @Entity
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor

    public class reservation {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        @ManyToOne
        private offre offre;
        @ManyToOne
        private client client;

        public reservation(com.maison.d.hote.projet.Entity.offre offre, com.maison.d.hote.projet.Entity.client client) {
            this.offre = offre;
            this.client = client;
        }
    }

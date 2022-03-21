import Link from "next/link"
import React from "react"
import { Component } from "react"
import MyButton from "../components/Button"
import Layout from "../components/Layout"

export default function page() {
    return (
        <Layout>
    <div>
        First article Page
        <p>
        Bricolage, construction, rénovation, décoration !
Bricoler est à la portée de tous, même si vous êtes un bricoleur du dimanche, pour peu que l'on maitrise quelques techniques simples. Ce blog du bricolage est justement là pour vous les présenter au travers de nombreux billets et autres tutos.

Chaque bricoleur, quel que soit son niveau, trouvera l'information dont il a besoin et pourra découvrir le maximum de trucs et astuces que nous mettrons en ligne très régulièrement.

Les dossiers et tutos sur le bricolage

5 bonnes raisons de se mettre au bricolage

Le marché du bricolage continue, année après année, d’être très florissant avec des ventes globalement toujours en progression, en considérant l'ensemble des rayons : chauffage, isolation, revêtement de sol, bois, peinture, électricité, décoration... Cet engouement des français pour le bricolage ne semble pas marquer le pas et pour mieux comprendre pourquoi, il suffit d’analyser les raisons qui justifient de se mettre au bricolage.

Faire des économies en bricolant
L’argument financier arrive inévitablement en tête des raisons qui motivent les français à se mettre au bricolage puisqu’en effet, ils économisent la partie main d’œuvre d’une facture que leur présenterait un artisan. Et aujourd’hui, les économies se font également via le e-commerce qui gagne de plus en plus de parts sur le marché du bricolage en proposant souvent des prix particulièrement attractifs sur les matériaux, les outils, etc.

En outre, bricoler participe à une certaine forme d’économie circulaire selon laquelle plutôt que de jeter et de faire augmenter les déchets à traiter nocifs pour l’environnement, on s’emploie à recycler, réparer et remettre en service à moindre coût.

Bricoler pour le plaisir et se détendre
Aujourd’hui, le bricolage est devenu une sorte de hobby au même titre que certains vont faire un golf ou d’autres une balade en forêt. Le fait de s’adonner à une activité de menuiserie, de peinture ou de maçonnerie permet de penser à autre chose, de laisser de côté les soucis du quotidien ou du travail, tout comme le fait une activité sportive. On se dépense au travers de cette occupation de bricolage, sans compter, selon les mêmes ressorts qu’en sport.

Prouver ses capacités par le bricolage
Entreprendre un projet de bricolage doit se faire à la hauteur de ses connaissances et, si besoin, il faudra les enrichir. Mener à bien et à son terme une réalisation faite soi-même permet de se valoriser, d’être fier de soi et de montrer ou se rassurer sur ses propres capacités manuelles. La confiance en soi est une force et en faire preuve permet d’être mieux dans sa vie quotidienne, dans ses relations aux autres et, pourquoi pas, d’éviter quelques séances de psy !

Imaginer et créer par le DIY
Le DIY (Do it yourself) a le vent en poupe depuis plusieurs années maintenant car le bricolage touche aussi à la décoration : le home made permet de se valoriser auprès des autres mais également offre la possibilité de laisser libre court à l’esprit créatif qui sommeille en chacun de nous ou à l’artiste contrarié qu’on peut être. Imaginer, innover, tester, oser, puis briller par son audace et son œil averti n’apporte que du bonheur et une satisfaction personnelle intense !

Egalité hommes-femmes chez les bricoleurs
Le bricolage n’est pas qu’une affaire d’homme ; les femmes sont de plus en plus nombreuses à s’adonner au bricolage. Bien que la décoration et le jardinage restent leur domaine favori, elles s’intéressent aux travaux manuels destinés à améliorer leur habitation, en faisant généralement un bon tandem avec les hommes : la caricature de la force contre l’esthétisme est un peu excessive cependant le bricolage permet de montrer la complémentarité indispensable entre les femmes et les hommes dans la conduite d’un chantier de bricolage. Le but est toujours de tendre vers l’égalité entre les femmes et les hommes…
        </p>
        <ul>
        <li><Link href="/Second-article"><a>Second article</a></Link></li>
        </ul>

        <MyButton />
    </div>
    </Layout>
    )
}


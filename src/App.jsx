import Header from "./components/Header/Header";
import Concept from "./components/Concept/Concept";
import Tab from "./components/Tab/Tab";
import { useState } from "react";
import { CONCEPTS, EXAMPLES } from "./database";

function App() {
	// const [selectedTopic, setSelectedTopic] = useState("Please click a button!");
	const [selectedTopic, setSelectedTopic] = useState("");

	// let tabContent = "click somwhere!";

	function handleSelect(tab) {
		console.log(tab);
		// tabContent = tab;
		setSelectedTopic(tab);
	}

	return (
		<div>
			<Header></Header>
			<main>
				<section id="core-concepts">
					<h2>Main concepts of React</h2>
					<ul>
						{CONCEPTS.map((concept) => {
							return (
								<Concept
									key={concept.title}
									{...concept}
								/>
							);
						})}
						{/* <Concept
							title={CONCEPTS[0].title}
							desc={CONCEPTS[0].desc}
							img={CONCEPTS[0].img}
						/>
						<Concept
							title={CONCEPTS[1].title}
							desc={CONCEPTS[1].desc}
							img={CONCEPTS[1].img}
						/>
						<Concept
							title={CONCEPTS[2].title}
							desc={CONCEPTS[2].desc}
							img={CONCEPTS[2].img}
						/>
						<Concept {...CONCEPTS[3]} /> */}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<Tab
							isSelected={selectedTopic === "components"}
							onSelect={() => handleSelect("components")}
						>
							Components
						</Tab>
						<Tab
							isSelected={selectedTopic === "jsx"}
							onSelect={() => handleSelect("jsx")}
						>
							JSX
						</Tab>
						<Tab
							isSelected={selectedTopic === "props"}
							onSelect={() => handleSelect("props")}
						>
							Props
						</Tab>
						<Tab
							isSelected={selectedTopic === "state"}
							onSelect={() => handleSelect("state")}
						>
							State
						</Tab>
					</menu>
					{/* {tabContent} */}
					{/* {selectedTopic} */}

					{!selectedTopic ? <p>Please, select a topic...</p> : null}
					{selectedTopic ? (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].desc}</p>
						</div>
					) : null}
				</section>
			</main>
		</div>
	);
}

export default App;

'use client'

import { GardenSection } from './GardenSection'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'For shipping ML products',
    items: 'Python, SQL, scikit-learn, PyTorch, TensorFlow, Jupyter, MLflow',
  },
  {
    label: 'For building production systems',
    items: 'AWS, GCP, Kubernetes, Airflow, Spark, Kafka, Redis',
  },
  {
    label: 'For working with LLMs',
    items: 'OpenAI API, Anthropic, LangChain, vector databases, RAG architectures',
  },
  {
    label: 'For making decisions',
    items: 'A/B testing, causal inference, experiment design, statistical modeling',
  },
]

export function Skills() {
  return (
    <GardenSection gardenDensity="dense" gardenPosition="bottom">
      <h2 className="font-headline text-section text-foreground mb-10">
        tools & methods
      </h2>

      <div className="max-w-2xl space-y-8">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className="text-small text-accent mb-2 font-body">{group.label}</p>
            <p className="text-body text-foreground/75">{group.items}</p>
          </motion.div>
        ))}
      </div>
    </GardenSection>
  )
}
